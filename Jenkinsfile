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
                withCredentials([gitUsernamePassword(credentialsId: 'gh-cr-id', gitToolName: 'git-tool')]) {
                  sh 'git fetch --all'
                  sh 'git tag -d snapshot || true'
                  sh 'git tag -a snapshot -m \"passed CI\"'
                  sh 'git push --tags'
                  sh 'npm run get-next-version'
               }
            }
        }
    }
}