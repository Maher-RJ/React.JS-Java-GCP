package com.gcs.dataservice.gcsdataservice.services;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;

@Service
public interface DataService {

    public List<JsonNode> getDataSearchByName(String name, String filter) throws MalformedURLException, IOException;

}
