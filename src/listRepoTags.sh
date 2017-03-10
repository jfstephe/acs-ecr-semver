#!/bin/bash

login=$(aws ecr get-login --region eu-west-1)

$login

aws ecr --region=eu-west-1 list-images --repository-name $1

