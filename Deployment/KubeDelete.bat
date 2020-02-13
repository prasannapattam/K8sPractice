kubectl delete -f DoctorDeployment.yaml
kubectl delete -f PatientDeployment.yaml
kubectl delete -f AppointmentDeployment.yaml
kubectl delete -f UIDeployment.yaml
kubectl delete -f MongoStatefulDeployment.yaml
kubectl delete -f https://bit.ly/kong-ingress-dbless
kubectl delete -f Ingress.yaml
