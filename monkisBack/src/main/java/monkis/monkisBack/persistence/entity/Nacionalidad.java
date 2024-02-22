package monkis.monkisBack.persistence.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "nacionalidad")
public class Nacionalidad {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;

    private String descripcion;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

}
