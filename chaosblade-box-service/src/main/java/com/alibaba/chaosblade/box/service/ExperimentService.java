/*
 * Copyright 1999-2021 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.alibaba.chaosblade.box.service;

import com.alibaba.chaosblade.box.service.model.experiment.*;
import com.alibaba.chaosblade.box.service.model.experiment.*;

import java.util.List;

/**
 * @author yefei
 */
public interface ExperimentService {

    /**
     * @param createExperimentRequest
     * @return
     */
    ExperimentResponse createExperiment(CreateExperimentRequest createExperimentRequest) throws Exception;

    /**
     * @param experimentRequest
     * @return
     */
    void deleteExperiment(ExperimentRequest experimentRequest) throws Exception;

    /**
     *
     * @param createExperimentRequest
     * @return
     */
    ExperimentResponse updateExperiment(CreateExperimentRequest createExperimentRequest);

    /**
     *
     * @param experimentRequest
     * @return
     */
    ExperimentTaskResponse executeExperiment(ExperimentRequest experimentRequest);

    /**
     *
     * @param experimentTaskRequest
     * @return
     */
    void finishExperiment(ExperimentTaskRequest experimentTaskRequest);

    /**
     *
     */
    ExperimentResponse getExperimentById(ExperimentRequest experimentRequest);

    /**
     *
     * @param experimentRequest
     * @return
     */
    List<ExperimentResponse> getExperimentsPageable(ExperimentRequest experimentRequest);

    /**
     *
     * @return
     */
    ExperimentStatisticsResponse getExperimentTotalStatistics();

    /**
     *
     * @param experimentRequest
     * @return
     */
    boolean deleteExperimentById(ExperimentRequest experimentRequest);
}
