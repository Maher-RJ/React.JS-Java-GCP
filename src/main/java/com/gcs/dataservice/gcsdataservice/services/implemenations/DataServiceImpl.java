package com.gcs.dataservice.gcsdataservice.services.implemenations;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;


import com.gcs.dataservice.gcsdataservice.services.DataService;
import com.gcs.dataservice.gcsdataservice.utils.Util;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


@Component
public class DataServiceImpl implements DataService {

    private URL url;

    public DataServiceImpl() throws MalformedURLException {
        this.url = new URL(Util.CONSTANT_DATA_SOURCE_URL);
    }

    @Override
    public List<JsonNode> getDataSearchByName(String name, String status) throws MalformedURLException, IOException {

        final JsonNode jsonNode = new ObjectMapper().readTree(url);
        List<JsonNode> results = iterateAndSearchData(jsonNode.elements().next(), name, status);

        return results;

    }

    private List<JsonNode> iterateAndSearchData(JsonNode data, String name, String status) {
        List<JsonNode> jsonList = new ArrayList<>();

        data.forEach(json -> {
            if (json.get(Util.CONSTANT_SEARCH_KEY_NAME).toString().contains((name==null)?"":name) && json.get(Util.CONSTANT_SEARCH_FILTER).toString().contains((status==null)?"":status)) {
                jsonList.add(json);
            }
        });

        return jsonList;
    }


}
