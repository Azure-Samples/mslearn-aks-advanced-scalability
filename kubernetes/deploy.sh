#!/bin/bash
set -x
RESOURCE_NAME=learn-aks-scalability-advanced

echo "Creating cluster..."

az group create -n $RESOURCE_NAME -l eastus

az aks create -g $RESOURCE_NAME -n $RESOURCE_NAME --node-count=1 --generate-ssh-keys --enable-addons http_application_routing -s Standard_B2s

az aks get-credentials -g $RESOURCE_NAME -n $RESOURCE_NAME

echo "Gathering DNS name"

DNS_NAME=$(az aks show -g $RESOURCE_NAME -n $RESOURCE_NAME -o tsv --query addonProfiles.httpApplicationRouting.config.HTTPApplicationRoutingZoneName)

curl -L https://raw.githubusercontent.com/Azure-Samples/mslearn-aks-advanced-scalability/main/kubernetes/ingress.yaml | sed 's+!DNS!+'"$DNS_NAME"'+g' | kubectl apply -f -
kubectl apply -f https://raw.githubusercontent.com/Azure-Samples/mslearn-aks-advanced-scalability/main/kubernetes/service.yaml
