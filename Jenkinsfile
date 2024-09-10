pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Tagging') {
            steps {
                sh("git config user.email ci@example.com")
                sh("git config user.name 'jenkins-semrel'")
                sh "git tag -a snapshot -m \"passed CI\""
                sh "git push --tags"
            }
        }
    }
}