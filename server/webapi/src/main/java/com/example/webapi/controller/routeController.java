package com.example.webapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("apiroute")
public class routeController {
    @GetMapping("/getproduct")
    public int getproduct(){
        return 3;
    }
}
