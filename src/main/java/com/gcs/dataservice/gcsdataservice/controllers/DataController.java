package com.gcs.dataservice.gcsdataservice.controllers;

import java.util.List;

import com.gcs.dataservice.gcsdataservice.services.DataService;
import com.gcs.dataservice.gcsdataservice.services.PaginationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;

@RestController
@CrossOrigin("*")
public class DataController {

    private DataService dataService;
    private PaginationService paginationService;

    @Autowired
    public DataController(DataService dataService, PaginationService paginationService) {
        this.dataService = dataService;
        this.paginationService = paginationService;
    }

    @GetMapping("/data/search")
    public Page<JsonNode> getDataBykey(final Pageable pageable, @RequestParam(value="name", required = false) String name, @RequestParam(value="status", required = false) String status) throws Exception {

        List<JsonNode> results = dataService.getDataSearchByName(name,status);
        Page<JsonNode> page = paginationService.getPaginatedPage(results, pageable);

        return page;

    }
}
