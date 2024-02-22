package monkis.monkisBack.persistence.mapper;

import monkis.monkisBack.domain.dto.PersonaDto;
import monkis.monkisBack.domain.dto.UsuarioDto;
import monkis.monkisBack.persistence.entity.Usuario;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {PersonaDtoMapper.class})
public interface UsuarioDtoMapper {
    UsuarioDto toUsuarioDto (Usuario usuario);
    List<UsuarioDto> toUsuariosDto(List<UsuarioDto> usuarios);

    @InheritInverseConfiguration
    Usuario toUsuario(UsuarioDto usuarioDto);
}
