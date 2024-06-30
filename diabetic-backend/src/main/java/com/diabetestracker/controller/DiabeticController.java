package com.diabetestracker.controller;

import com.diabetestracker.model.Diabetic;
import com.diabetestracker.service.DiabeticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/diabetics")
@CrossOrigin(origins = "http://localhost:51603")

public class DiabeticController {

    @Autowired
    private DiabeticService diabeticService;

    @GetMapping
    public List<Diabetic> getAllUsers() {
        return diabeticService.getAllDiabetics();
    }

    @GetMapping("/{id}")
    public Diabetic getUserById(@PathVariable Long id) {
        return diabeticService.getDiabeticById(id);
    }

    @PostMapping
    public Diabetic createDiabetic(@RequestBody Diabetic diabetic) {
        return diabeticService.saveDiabetic(diabetic);
    }

    @PutMapping("/{id}")
    public Diabetic updateDiabetic(@PathVariable Long id, @RequestBody Diabetic diabetic) {
        diabetic.setId(id);
        return diabeticService.saveDiabetic(diabetic);
    }

    @DeleteMapping("/{id}")
    public void deleteDiabetic(@PathVariable Long id) {
        diabeticService.deleteDiabetic(id);
    }
}
