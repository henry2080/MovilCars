import sib_api_v3_sdk
from sib_api_v3_sdk.rest import ApiException

from decouple import config
from flask import Flask, request
from twilio.rest import Client

app = Flask(__name__)

account_sid = config('TWILIO_ACCOUNT_SID')
auth_token = config('TWILIO_AUTH_TOKEN')
client = Client(account_sid, auth_token)

@app.route('/')
def inicio():
    return 'El servidor funciona'

@app.route('/sms')
def sms():
    try:
        contenido = request.args.get("mensaje")
        destino = request.args.get("telefono")

        message = client.messages \
                        .create(
                            body=contenido,
                            from_='+14178841456',
                            to='+57' + destino
                        )

        print(message.sid)
        return "¡Mensaje enviado!"
    except Exception as e:
        return "Error enviando mensaje de texto"

@app.route('/envio-correo')
def email():
    correo=request.args.get("correo")
    #nombre=request.args.get("nombre")
    asunto=request.args.get("asunto")
    mensaje=request.args.get("mensaje")

    configuration = sib_api_v3_sdk.Configuration()
    configuration.api_key['api-key'] = config('SENDINBLUE_API_KEY')

    api_instance = sib_api_v3_sdk.TransactionalEmailsApi(sib_api_v3_sdk.ApiClient(configuration))
    subject = asunto
    html_content = "<html><body><h1>" + mensaje + "</h1></body></html>"
    sender = {"name":"MovilCars","email":"jeurojascastillo@gmail.com"}
    to = [{"email":correo,"name":"nombre"}]
    headers = {"Some-Custom-Name":"unique-id-1234"}
    send_smtp_email = sib_api_v3_sdk.SendSmtpEmail(to=to, headers=headers, html_content=html_content, sender=sender, subject=subject)

    try:
        api_response = api_instance.send_transac_email(send_smtp_email)
        print(api_response)
        return "El correo se ha enviado exitosamente"
    except ApiException as e:
        print("Exception when calling SMTPApi->send_transac_email: %s\n" % e)
        return "Error enviando correo"

if __name__ == '__main__':
    app.run()
