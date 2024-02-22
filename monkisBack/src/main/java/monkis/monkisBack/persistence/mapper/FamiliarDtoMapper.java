package monkis.monkisBack.persistence.mapper;

import monkis.monkisBack.domain.dto.FamiliarDto;
import monkis.monkisBack.domain.dto.PersonaDto;
import monkis.monkisBack.domain.dto.RelacionDto;
import monkis.monkisBack.domain.dto.UsuarioDto;
import monkis.monkisBack.persistence.entity.Familiar;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring", uses = {PersonaDtoMapper.class, UsuarioDtoMapper.class, RelacionDtoMapper.class})
public interface FamiliarDtoMapper {
    FamiliarDto toFamiliarDto (Familiar familiar);
    List<FamiliarDto> toFamiliaresDto(List<Familiar> familiares);

    @InheritInverseConfiguration
    Familiar toFamiliar(FamiliarDto familiarDto);
}
