```
 docker build -t k8s-test .
 minikube image load k8s-test
 kubectl apply -f deployment.yaml
 kubectl apply -f service.yaml
 kubectl apply -f storage-class.yaml
 kubectl apply -f db/
```