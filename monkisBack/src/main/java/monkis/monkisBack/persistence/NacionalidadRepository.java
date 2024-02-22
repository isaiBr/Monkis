package monkis.monkisBack.persistence;

import monkis.monkisBack.domain.dto.NacionalidadDto;
import monkis.monkisBack.domain.repository.NacionalidadDtoRepository;
import monkis.monkisBack.persistence.crud.NacionalidadCrudRepository;
import monkis.monkisBack.persistence.entity.Familiar;
import monkis.monkisBack.persistence.entity.Nacionalidad;
import monkis.monkisBack.persistence.mapper.NacionalidadDtoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NacionalidadRepository implements NacionalidadDtoRepository {

    @Autowired
    private NacionalidadCrudRepository nacionalidadCrudRepository;
    @Autowired
    private NacionalidadDtoMapper mapper;
    @Override
    public List<NacionalidadDto> getAll() {
        List<Nacionalidad> nacionalidades = (List<Nacionalidad>)nacionalidadCrudRepository.findAll();
        return mapper.toNacionalidadesDto(nacionalidades);
    }

    @Override
    public NacionalidadDto save(NacionalidadDto nacionalidadDto) {
        Nacionalidad nacionalidad = mapper.toNacionalidad(nacionalidadDto);
        return mapper.toNacionalidadDto(nacionalidadCrudRepository.save(nacionalidad));
    }
}
