package monkis.monkisBack.domain.repository;

import monkis.monkisBack.domain.dto.RelacionDto;

import java.util.List;

public interface RelacionDtoRepository {
    List<RelacionDto> getAll();
}
