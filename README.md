
# 📦 SIT737-2025-Prac6C: Interacting with Kubernetes


---

## 📌 Project Objectives

- ✅ Interact with a Kubernetes cluster via CLI (`kubectl`)
- ✅ Use port forwarding to access services
- ✅ Modify and update the Node.js application
- ✅ Rebuild Docker image with a new version
- ✅ Update Kubernetes deployment to use the new version


---


---

## 🧩 PART I – Interacting with the Cluster

### ✅ 1. Verify Pods and Services

Run the following:

```bash
kubectl get pods
kubectl get deployments
kubectl get services
🔁 2. Port Forward to Access App Locally
kubectl port-forward service/calculator-service 4000:3000

3. Access Application in Browser
Test your endpoints in browser or Postman:
http://localhost:4000/add?a=10&b=5
http://localhost:4000/subtract?a=10&b=5
http://localhost:4000/multiply?a=10&b=5
http://localhost:4000/divide?a=10&b=5

 PART II – Updating the Application
 4. Modify the Node.js App
Open server.js and update the response for better visibility:

js
Copy
Edit
res.send(`🧮 Sum: ${Number(a) + Number(b)}`);
Apply changes to all routes to clearly show it's version 2.

5. Rebuild Docker Image with New Tag
docker build -t calculator-service-development:v2 .
docker images

6. Update Deployment to Use New Version
Open deployment.yaml and update:
FROM
image: calculator-service-development:v1
TO:
image: calculator-service-development:v2
Apply the changes:
kubectl apply -f deployment.yaml

7. Confirm Deployment and Pods Are Running
kubectl get pods
kubectl get deployments
New pods should spin up with the updated version.

8. Test the Updated App
If needed, port forward again:
kubectl port-forward service/calculator-service 4000:3000
Then test in browser:
http://localhost:4000/add?a=5&b=3
Expected output:
🧮 Sum: 10

