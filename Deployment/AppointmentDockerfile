FROM mcr.microsoft.com/dotnet/core/sdk AS build
WORKDIR /app

# Shared
WORKDIR /app/Shared
COPY ./Shared/. ./

WORKDIR /app/appointment
COPY ./Appointment/*.csproj ./
RUN dotnet restore

COPY ./Appointment/. ./
RUN dotnet publish -c Release -o /app/out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet AS runtime
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "Appointment.dll"]
