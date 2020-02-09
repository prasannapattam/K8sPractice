cd ..
docker build -t pprasanna/ehr-doctor -f ./Deployment/DoctorDockerfile .
docker build -t pprasanna/ehr-patient -f ./Deployment/PatientDockerfile .
docker build -t pprasanna/ehr-appointment -f ./Deployment/AppointmentDockerfile .
docker build -t pprasanna/ehr-ui -f ./Deployment/UIDockerfile .
cd Deployment
