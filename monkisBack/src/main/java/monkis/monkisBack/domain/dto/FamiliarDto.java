package monkis.monkisBack.domain.dto;

import monkis.monkisBack.persistence.entity.Relacion;

public class FamiliarDto {
    private int id;
    private int idRelacion;
    private int idPersona;
    private int idPrincipal;
    private RelacionDto relacion;
    private PersonaDto persona;
    private UsuarioDto principal;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdRelacion() {
        return idRelacion;
    }

    public void setIdRelacion(int idRelacion) {
        this.idRelacion = idRelacion;
    }

    public int getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(int idPersona) {
        this.idPersona = idPersona;
    }

    public int getIdPrincipal() {
        return idPrincipal;
    }

    public void setIdPrincipal(int idUsuario) {
        this.idPrincipal = idUsuario;
    }

    public RelacionDto getRelacion() {
        return relacion;
    }

    public void setRelacion(RelacionDto relacion) {
        this.relacion = relacion;
    }

    public PersonaDto getPersona() {
        return persona;
    }

    public void setPersona(PersonaDto persona) {
        this.persona = persona;
    }

    public UsuarioDto getPrincipal() {
        return principal;
    }

    public void setPrincipal(UsuarioDto principal) {
        this.principal = principal;
    }
}
