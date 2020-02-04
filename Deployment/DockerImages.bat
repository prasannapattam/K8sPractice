cd ..
docker build -t ehr/doctor -f ./Deployment/DoctorDockerfile .
docker build -t ehr/patient -f ./Deployment/PatientDockerfile .
docker build -t ehr/appointment -f ./Deployment/AppointmentDockerfile .
docker build -t ehr/ui -f ./Deployment/UIDockerfile .
cd Deployment
