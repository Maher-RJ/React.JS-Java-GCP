package com.gcs.dataservice.gcsdataservice.exceptions;

import com.gcs.dataservice.gcsdataservice.utils.Util;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = Util.CONSTANT_DATA_NOT_FOUND_MESSAGE)
public class DataNotFoundException extends RuntimeException{
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public DataNotFoundException() {
        super(Util.CONSTANT_DATA_NOT_FOUND_MESSAGE);
    }

    @Override
    public String getMessage() {
        return Util.CONSTANT_DATA_NOT_FOUND_MESSAGE;
    }

}
