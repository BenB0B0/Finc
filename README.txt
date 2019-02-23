TO START CLIENT:
>CD: "...\client" 
>Run "npm run serve"

TO START SERVER: 
>CD "...\server" 
>Run "npm run dev" 

TO PUSH TO HEROKU: 
> "npm run build" in client 
> "git add ." in server 
> "git commit -m <comment>" in sever 
> "git push heroku master" in server 
> "heroku open" in server 

TO LOGIN TO HEROKU: 
"heroku login" (may have to be connected to secure client? heroku files must be on network) 

*If API isn't working
    > Firewall/security may be blocking it
    > Try seeing if local mongoDB works replacing Atlas call with "mongodb://localhost:27017/test"

----------------------------------
Local server @ "http://localhost:8080/#/"
Local API @ "http://localhost:5000/api/posts"
Prod Server @ "https://secure-ocean-90308.herokuapp.com/"
Atlas Cluster @ "https://cloud.mongodb.com/v2/5c70127bcf09a28511ff8b61#clusters" 
