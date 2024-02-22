package monkis.monkisBack.persistence.mapper;

import monkis.monkisBack.domain.dto.NacionalidadDto;
import monkis.monkisBack.persistence.entity.Nacionalidad;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface NacionalidadDtoMapper {
    NacionalidadDto toNacionalidadDto (Nacionalidad nacionalidad);
    List<NacionalidadDto> toNacionalidadesDto(List<Nacionalidad> nacionalidad);

    @InheritInverseConfiguration
    Nacionalidad toNacionalidad(NacionalidadDto nacionalidadDto);
}
