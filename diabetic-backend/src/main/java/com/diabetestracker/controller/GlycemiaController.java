package com.diabetestracker.controller;

import com.diabetestracker.model.Glycemie;
import com.diabetestracker.model.Glycemie;
import com.diabetestracker.service.GlycemieService;
import com.diabetestracker.service.GlycemieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/glycemies")
@CrossOrigin(origins = "http://localhost:4200")

public class GlycemiaController {

    @Autowired
    private GlycemieService glycemieService;

    @GetMapping
    public List<Glycemie> getAllUsers() {
        return glycemieService.getAllGlycemies();
    }

    @GetMapping("/{id}")
    public Glycemie getUserById(@PathVariable Long id) {
        return glycemieService.getGlycemieById(id);
    }

    @PostMapping
    public Glycemie createUser(@RequestBody Glycemie Glycemie) {
        return glycemieService.saveGlycemie(Glycemie);
    }

    @PutMapping("/{id}")
    public Glycemie updateGlycemie(@PathVariable Long id, @RequestBody Glycemie Glycemie) {
        Glycemie.setId(id);
        return glycemieService.saveGlycemie(Glycemie);
    }

    @DeleteMapping("/{id}")
    public void deleteGlycemie(@PathVariable Long id) {
        glycemieService.deleteGlycemie(id);
    }
}
