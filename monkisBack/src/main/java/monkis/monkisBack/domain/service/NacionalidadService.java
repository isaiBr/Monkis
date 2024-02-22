package monkis.monkisBack.domain.service;

import monkis.monkisBack.domain.dto.NacionalidadDto;
import monkis.monkisBack.domain.dto.PersonaDto;
import monkis.monkisBack.domain.repository.NacionalidadDtoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NacionalidadService {
    @Autowired
    private NacionalidadDtoRepository nacionalidadDtoRepository;

    public List<NacionalidadDto> getAll(){
        return nacionalidadDtoRepository.getAll();
    }

    public NacionalidadDto save(NacionalidadDto nacionalidadDto){
        return nacionalidadDtoRepository.save(nacionalidadDto);
    }
}
