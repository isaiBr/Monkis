package monkis.monkisBack.persistence.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "familiar")
public class Familiar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "id_persona")
    private int idPersona;
    @Column(name = "id_relacion")
    private int idRelacion;
    @Column(name = "id_principal")
    private int idPrincipal;

    @ManyToOne
    @JoinColumn(name = "id_persona", insertable = false, updatable = false)
    private Persona persona;
    @ManyToOne
    @JoinColumn(name = "id_relacion", insertable = false, updatable = false)
    private Relacion relacion;
    @ManyToOne
    @JoinColumn(name = "id_principal", insertable = false, updatable = false)
    private Usuario principal;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(int idPersona) {
        this.idPersona = idPersona;
    }

    public int getIdRelacion() {
        return idRelacion;
    }

    public void setIdRelacion(int idRelacion) {
        this.idRelacion = idRelacion;
    }

    public int getIdPrincipal() {
        return idPrincipal;
    }

    public void setIdPrincipal(int idPrincipal) {
        this.idPrincipal = idPrincipal;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Relacion getRelacion() {
        return relacion;
    }

    public void setRelacion(Relacion relacion) {
        this.relacion = relacion;
    }

    public Usuario getPrincipal() {
        return principal;
    }

    public void setPrincipal(Usuario principal) {
        this.principal = principal;
    }
}
