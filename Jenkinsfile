pipeline {
    agent any
    environment {
        GH_TOKEN  = credentials('some-id')
    }
    stages {
        stage('Test') {
            steps {
                sh '''
                # Configure your test steps here (checkout, npm install, tests etc)
                npm install
                '''
            }
        }
        stage('Release') {
            tools {
                nodejs "node LTS"
            }
            steps {
                sh '''
                # Run optional required steps before releasing
                npx semantic-release
                '''
            }
        }
    }
}