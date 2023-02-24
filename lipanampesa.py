import requests 
from requests.auth import HTTPBasicAuth
from datetime import datetime
import base64

import keys


unformatted_time = datetime.now()
formatted_time = unformatted_time.strftime("%Y%m%d%H%M%S")
print(formatted_time)

data_to_encode = keys.business_shortcode + keys.lipa_na_mpesa_passkey + formatted_time
encoded_string = base64.b64encode(data_to_encode.encode())

decoded_password = encoded_string.decode('utf-8')

print(decoded_password)

consumer_key = keys.consumer_key
consumer_secret = keys.consumer_secret
api_URL = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

r = requests.get(api_URL, auth=HTTPBasicAuth(consumer_key, consumer_secret))

print(r.json())
json_response = r.json()  #{'access_token': 'S0eyLoI1m3RPV6vvxove8kxTPWUu', 'expires_in': '3599'}


my_access_token = json_response['requestId']

def lipa_na_mpesa():
   access_token = my_access_token
   api_url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
   
   headers = {"Authorization": "Bearer %s" % access_token}

   # Request body

   
   request = {    
      "BusinessShortCode":"174379",    
      "Password": 'MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwMjIyMTQxMDA1',    
      "Timestamp": formatted_time,    
      "TransactionType": "CustomerPayBillOnline",    
      "Amount":"1",    
      "PartyA": keys.phone_number,    
      "PartyB":"174379",    
      "PhoneNumber": keys.phone_number,    
      "CallBackURL":"https://gitechsolutions.co.ke",    
      "AccountReference":"Test",    
      "TransactionDesc":"Test"
   }


   response = requests.post(api_url, json=request, headers=headers)
   print(response.text)

lipa_na_mpesa()




# def stk_push():
#   headers = {
#     'Content-Type': 'application/json',
#     'Authorization': 'Bearer BNspCXRENshdzI4vAooJZqlsFkoy'
#   }
#   payload = {
#       "BusinessShortCode": 174379,
#       "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwMjIyMTQxMDA1",
#       "Timestamp": formatted_time,
#       "TransactionType": "CustomerPayBillOnline",
#       "Amount": 1,
#       "PartyA": 254791019770,
#       "PartyB": 174379,
#       "PhoneNumber": 254791019770,
#       "CallBackURL": "https://mydomain.com/path",
#       "AccountReference": "CompanyXLTD",
#       "TransactionDesc": "Payment of X" 
#     }
#   response = requests.request("POST", 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', headers = headers, data = payload)
#   print(response.text.encode('utf8'))

# stk_push()