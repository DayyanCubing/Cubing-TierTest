import requests

url = "https://www.worldcubeassociation.org/api/v0/export/public"

response = requests.get(url)
data = response.json()


tsv_url = data["tsv_url"]

tsv_response = requests.get(tsv_url)

with open("wca_export.zip", "wb") as f:
    f.write(tsv_response.content)

print("Download complete")