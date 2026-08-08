import requests
import zipfile

url = "https://www.worldcubeassociation.org/api/v0/export/public"

response = requests.get(url)
data = response.json()


tsv_url = data["tsv_url"]

tsv_response = requests.get(tsv_url)

with open("wca_export.zip", "wb") as f:
    f.write(tsv_response.content)




with zipfile.ZipFile("wca_export.zip", "r") as zip_file:
    with zip_file.open("WCA_export_ranks_average.tsv") as file:
        for i in range(5):
            print(file.readline().decode("utf-8").rstrip())