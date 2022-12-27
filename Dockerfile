FROM openjdk:11
EXPOSE 8080
ADD ./target/gcs-data-service-0.0.1-SNAPSHOT.jar ./gcs-data-service-0.0.1.jar
ENTRYPOINT ["java","-jar","gcs-data-service-0.0.1.jar"]
