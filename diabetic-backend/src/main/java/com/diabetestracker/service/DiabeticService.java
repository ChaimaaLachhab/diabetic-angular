package com.diabetestracker.service;

import com.diabetestracker.model.Diabetic;
import com.diabetestracker.repository.DiabeticRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DiabeticService {

    @Autowired
    private DiabeticRepository diabeticRepository;

    public List<Diabetic> getAllDiabetics() {
        return diabeticRepository.findAll();
    }

    public Diabetic getDiabeticById(Long id) {
        return diabeticRepository.findById(id).orElse(null);
    }

    public Diabetic saveDiabetic(Diabetic diabetic) {
        return diabeticRepository.save(diabetic);
    }

    public void deleteDiabetic(Long id) {
        diabeticRepository.deleteById(id);
    }
}