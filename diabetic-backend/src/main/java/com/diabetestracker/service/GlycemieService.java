package com.diabetestracker.service;

import com.diabetestracker.model.Glycemie;
import com.diabetestracker.repository.GlycemieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GlycemieService {

    @Autowired
    private GlycemieRepository glycemieRepository;

    public List<Glycemie> getAllGlycemies() {
        return glycemieRepository.findAll();
    }

    public Glycemie getGlycemieById(Long id) {
        return glycemieRepository.findById(id).orElse(null);
    }

    public Glycemie saveGlycemie(Glycemie Glycemie) {
        return glycemieRepository.save(Glycemie);
    }

    public void deleteGlycemie(Long id) {
        glycemieRepository.deleteById(id);
    }
}