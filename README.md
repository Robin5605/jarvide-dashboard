# Jarvide Web Dashboard
### Below are instructions on how to set up and run a docker container hosting the Jarvide web dashboard.
---
1. Clone and change directory into source code
```bash
git clone https://github.com/Robin5605/jarvide-dashboard.git
cd jarvide-dashboard
```
2. Build docker image from `Dockerfile`
```bash
sudo docker build -t jarvide-dashboard .
```
Wait a few minutes for Docker to build the image

3. Run the newly build docker image
```bash
sudo docker run -p 3000:3000 -it jarvide-dashboard
```
- Binds Docker container port 3000 to host machine port 3000
- Runs interactively and attaches to your current shell

The dashboard should now be up at `http://127.0.0.1:3000` **or** `localhost:3000`