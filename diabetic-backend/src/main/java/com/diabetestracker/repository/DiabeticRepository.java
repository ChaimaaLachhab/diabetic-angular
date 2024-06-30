package com.diabetestracker.repository;

import com.diabetestracker.model.Diabetic;
import com.diabetestracker.model.Glycemie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DiabeticRepository extends JpaRepository<Diabetic, Long> {
    @Query("SELECT d FROM Diabetic d WHERE d.email = :email and d.password= :password")
    Diabetic findDiabrtic(String email, String password);
}
