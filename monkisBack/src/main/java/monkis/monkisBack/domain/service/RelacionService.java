package monkis.monkisBack.domain.service;

import monkis.monkisBack.domain.dto.PersonaDto;
import monkis.monkisBack.domain.dto.RelacionDto;
import monkis.monkisBack.domain.repository.RelacionDtoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RelacionService {
    @Autowired
    private RelacionDtoRepository relacionDtoRepository;

    public List<RelacionDto> getAll(){
        return relacionDtoRepository.getAll();
    }
}
