package com.gcs.dataservice.gcsdataservice.services;

import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;

@Service
public interface PaginationService {

    public Page<JsonNode> getPaginatedPage(List<JsonNode> results, Pageable pageable);
}
