package monkis.monkisBack.persistence;

import monkis.monkisBack.domain.dto.RelacionDto;
import monkis.monkisBack.domain.repository.RelacionDtoRepository;
import monkis.monkisBack.persistence.crud.RelacionCrudRepository;
import monkis.monkisBack.persistence.entity.Persona;
import monkis.monkisBack.persistence.entity.Relacion;
import monkis.monkisBack.persistence.mapper.RelacionDtoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RelacionRepository implements RelacionDtoRepository {
    @Autowired
    private RelacionCrudRepository relacionCrudRepository;
    @Autowired
    private RelacionDtoMapper mapper;

    @Override
    public List<RelacionDto> getAll() {
        List<Relacion> relaciones =  (List<Relacion>)relacionCrudRepository.findAll();
        return mapper.toRelacionesDto(relaciones);
    }
}
