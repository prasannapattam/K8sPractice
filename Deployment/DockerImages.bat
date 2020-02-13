cd ..
docker build -t pprasanna/ehr-doctor:latest -f ./Deployment/DoctorDockerfile .
docker build -t pprasanna/ehr-patient:latest -f ./Deployment/PatientDockerfile .
docker build -t pprasanna/ehr-appointment:latest -f ./Deployment/AppointmentDockerfile .
docker build -t pprasanna/ehr-ui:latest -f ./Deployment/UIDockerfile .
cd Deployment
