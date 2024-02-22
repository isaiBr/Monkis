package monkis.monkisBack.domain.repository;

import monkis.monkisBack.domain.dto.NacionalidadDto;
import monkis.monkisBack.persistence.entity.Nacionalidad;

import java.util.List;

public interface NacionalidadDtoRepository {
    List<NacionalidadDto> getAll();
    NacionalidadDto save(NacionalidadDto nacionalidadDto);
}
