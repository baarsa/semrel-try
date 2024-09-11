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
                  script {
                    NEXT_VERSION = sh (
                      script: 'npm run get-next-version',
                      returnStdout: true
                    )
                    echo "Next version: ${NEXT_VERSION}"
                  }
               }
            }
        }
    }
}