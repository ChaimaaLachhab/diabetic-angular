package com.diabetestracker.repository;

import com.diabetestracker.model.Glycemie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
@Repository
public interface GlycemieRepository extends JpaRepository<Glycemie, Long> {

    @Query(value = "SELECT * FROM glycemie WHERE diabetic_id = :id ORDER BY YEAR(date), WEEK(date), date", nativeQuery = true)
    List<Glycemie> findAllGroupedByWeek(Long id);

    @Query(value = "SELECT * FROM glycemie WHERE diabetic_id = :id ORDER BY YEAR(date), MONTH(date), date", nativeQuery = true)
    List<Glycemie> findAllGroupedByMonth(Long id);

    @Query(value = "SELECT * FROM glycemie WHERE diabetic_id = :id ORDER BY YEAR(date), date ", nativeQuery = true)
    List<Glycemie> findAllGroupedByYear(Long id);


    //Month
    @Query(value = "SELECT * FROM glycemie g WHERE diabetic_id = :id AND MONTH(g.date) = :month ORDER BY date", nativeQuery = true)
    List<Glycemie> searchByMonth(@Param("id") Long id, @Param("month") Integer month);

    //Week
    @Query(value = "SELECT * FROM glycemie g WHERE diabetic_id = :id AND YEAR(g.date) = :year AND WEEK(g.date) = :week ORDER BY date", nativeQuery = true)
    List<Glycemie> searchByWeek(@Param("id") Long id, @Param("year") int year, @Param("week") int week);


    @Query(value = "SELECT * FROM glycemie WHERE diabetic_id = :id AND YEAR(date) = :year AND MONTH(date) = :month ORDER BY date", nativeQuery = true)
    List<Glycemie> findByYearAndMonth(@Param("id") Long id, @Param("year") int year, @Param("month") int month);

    @Query(value = "SELECT * FROM glycemie ORDER BY date DESC LIMIT 1", nativeQuery = true)
    Glycemie findFirstByOrderByDateAndTimeDesc();

    @Query("SELECT g FROM Glycemie g WHERE g.date >= :startDate AND g.date < :endDate")
    List<Glycemie> findHourlyGlycemiaData(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);

    List<Glycemie> findAllByDate(LocalDateTime date);

    @Query(value = "SELECT * FROM Glycemie g WHERE g.diabetic_id = :id ORDER BY g.id DESC LIMIT 1", nativeQuery = true)
    Glycemie findFirstByDiabeticIdNative(@Param("id") Long id);

    @Query("SELECT g FROM Glycemie g WHERE g.diabetic.id = :id")
    List<Glycemie> findByDiabetic_Id(Long id);
}