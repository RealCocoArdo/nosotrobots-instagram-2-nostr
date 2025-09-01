# n8n Nostr Bot documentation


<p align="center"><img src="screenshots/Overview.PNG"></img>
<a href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></img></a>
</p>

## Introduction
This is a simple Nostr Bot crossposting text from Instrgam on Nostr. It should be a good starting point to build a custom Nostr Bot application with n8n.
<br>
This application is build using the <a href="https://github.com/ocknamo/n8n-nodes-nostrobots?tab=readme-ov-file">n8n-nodes-nostrobots</a>.

## Requirements
<details>
<summary>see more</summary>

- n8n installed (either locally or via the cloud)
<br><br>
-------
<br><br>
If you want to run it locally for free I recommend using docker.
<br>

### <u>Install docker (may change, depending on your OperatingSystem)</u><br>
`sudo apt install docker.io`

### <u>Install n8n</u>
`docker run -d --name n8n -p 5680:5678 n8nio/n8n`
<br>After this you can open n8n in your browser at http://localhost:5680

### <u>Helpfull docker commands</u>
List all active containers (get ContainerID):<br>
`docker ps -a`

Stop container<br>
`docker stop replaceWithContainerID`<br>
`docker rm replaceWithContainerID`

Restart<br>
`docker restart n8n`
</details>

## Guide
<details>
<summary>see more</summary>

1. You first need to install the nostrobots nodes<br>
https://github.com/ocknamo/n8n-nodes-nostrobots?tab=readme-ov-file<br>
https://docs.n8n.io/integrations/community-nodes/installation/manual-install/

2. Then get a API token from api.apify to scrape instagram <br>
https://apify.com/apify/instagram-scraper

3. Create a Nostr account to gain the nsec and npub key

4. Download the this template (bot.json) and upload it in n8n.
<br><br> 
Or rebuild the nodes as seen in the overview picture. See greater detail by unfloding the screenshots.
You can also copy all code used in the "code snipets" folder for faster rebuild.

5. Customize:

- Set a Instagram Username
- Add tokens for Instaagram
- Enter the npub and nsec for the nostr nodes

</details>

## Screenshots
<details>
<summary>see more</summary>

### Top row:
![Screenshot](screenshots/http%20request.PNG)
![Screenshot](screenshots/Last%20Insta%20Post.PNG)

### Bottom row:
![Screenshot](screenshots/Nostr%20Read.PNG)
![Screenshot](screenshots/Limit%20last%20Post.PNG)
![Screenshot](screenshots/Last%20Nostr%20Post.PNG)

### Merge:
![Screenshot](screenshots/Merge.PNG)
![Screenshot](screenshots/remapping.PNG)
![Screenshot](screenshots/if.PNG)
![Screenshot](screenshots/Send%20event.PNG)
</details>