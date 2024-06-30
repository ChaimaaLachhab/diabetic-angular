package com.diabetestracker.model;

import com.diabetestracker.enums.DiabeticType;
import lombok.*;

import jakarta.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Diabetic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private DiabeticType type;

    private Integer age;
    private float weight;
    private float height;
    private String email;
    private String password;

    @OneToMany(mappedBy = "diabetic", cascade = CascadeType.REMOVE)
    private List<Glycemie> glycemies;
}

