package monkis.monkisBack.persistence.mapper;

import monkis.monkisBack.domain.dto.NacionalidadDto;
import monkis.monkisBack.domain.dto.PersonaDto;
import monkis.monkisBack.persistence.entity.Persona;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {NacionalidadDtoMapper.class})
public interface PersonaDtoMapper {
    PersonaDto toPersonaDto (Persona persona);
    List<PersonaDto> toPersonasDto(List<Persona> personas);


    @InheritInverseConfiguration
    Persona toPersona(PersonaDto personaDto);
}
