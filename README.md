# Reactivities

## Database setup
ensure you have dotnet-ef. The below command should return a list of tools with dotnet-ef on it
```
dotnet tool list -g
```

Don't have it? no worries, find the version matching your dotnet version from nuget.org and run 
```
dotnet tool install --global dotnet-ef --version 7.0.2
```

Now, add the InitialCreate migration using the `dotnet-ef`
```
dotnet ef migrations add InitialCreate -s API -p Persistence
```

## Running the project locally
### Backend
cd into the API folder and run
```
dotnet watch --no-hot-reload
```

### Frontend
After [starting the backend](#backend), cd into the frontend folder and run
```
npm start
```
