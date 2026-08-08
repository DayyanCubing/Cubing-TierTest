import requests
import zipfile
import csv
'''
url = "https://www.worldcubeassociation.org/api/v0/export/public"

response = requests.get(url)
data = response.json()

tsv_url = data["tsv_url"]

tsv_response = requests.get(tsv_url)

with open("wca_export.zip", "wb") as f:
    f.write(tsv_response.content)

'''
# Store all competitors' best averages, grouped by event
event_times = {}

with zipfile.ZipFile("wca_export.zip", "r") as zip_file:
    with zip_file.open("WCA_export_ranks_average.tsv") as file:
        reader = csv.DictReader(
            (line.decode("utf-8") for line in file),
            delimiter="\t"
        )

        for row in reader:
            event = row["event_id"]
            best = int(row["best"])

            # WCA stores normal average times in centiseconds
            time = best / 100

            if event not in event_times:
                event_times[event] = []

            event_times[event].append(time)



competitors = {}

events = ["222","333","444","555","666","777","333oh","minx","pyram","clock","sq1","skewb","333bf","444bf","555bf"] #It is missing FTO
for event in events:
    competitors[event] = len(event_times[event])

print(competitors)