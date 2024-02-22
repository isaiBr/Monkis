package monkis.monkisBack.persistence.mapper;

import monkis.monkisBack.domain.dto.RelacionDto;
import monkis.monkisBack.persistence.entity.Relacion;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RelacionDtoMapper {
    RelacionDto toRelacionDto(Relacion relacion);
    List<RelacionDto> toRelacionesDto(List<Relacion> relaciones);

    @InheritInverseConfiguration
    Relacion toRelacion(RelacionDto relacionDto);

}
