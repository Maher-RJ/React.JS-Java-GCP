package com.gcs.dataservice.gcsdataservice.services.implemenations;

import java.util.List;

import com.gcs.dataservice.gcsdataservice.exceptions.DataNotFoundException;
import com.gcs.dataservice.gcsdataservice.services.PaginationService;
import com.gcs.dataservice.gcsdataservice.utils.Util;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;
import com.fasterxml.jackson.databind.JsonNode;
import com.google.common.collect.Lists;

@Component
public class PaginationServiceImpl implements PaginationService {

    public Page<JsonNode> getPaginatedPage(List<JsonNode> results, Pageable pageable) {

        Page<JsonNode> page = null;
        List<List<JsonNode>> pagedList = Lists.partition(results, Util.CONSTANT_PAGE_SIZE);

        try {
            page = new PageImpl<JsonNode>(pagedList.get(pageable.getPageNumber()), pageable,
                    results.size());
        } catch (Exception ex) {
            throw new DataNotFoundException();
        }


        return page;
    }
}
