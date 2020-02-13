kubectl apply -f DoctorDeployment.yaml
kubectl apply -f PatientDeployment.yaml
kubectl apply -f AppointmentDeployment.yaml
kubectl apply -f UIDeployment.yaml
kubectl apply -f MongoStatefulDeployment.yaml
kubectl apply -f https://bit.ly/kong-ingress-dbless
kubectl apply -f Ingress.yaml
kubectl apply -f StaticIP.yaml

